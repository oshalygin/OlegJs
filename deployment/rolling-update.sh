#!/usr/bin/env bash

# Read the current replication-controller name
echo "Performing a rolling update on the Kubernetes Replication Controller..."

newConfiguration="./replication-controller.yaml"
# Verify that the existing configuration exists, if not, abort.
arrayOfExistingNameResults=(`echo $(kubectl get rc --no-headers)`);
currentName=(`echo ${arrayOfExistingNameResults[0]}`)

if [[ $currentName = *[!\ ]* ]]
then
  
  echo "Current Replication Controller:  $currentName"

  arrayOfNewNameResults=(`echo $(npm run kube-config -- --file-path=../../.$newConfiguration --get-rc-name)`)
  newName=(`echo ${arrayOfNewNameResults[${#arrayOfNewNameResults[@]}-1]}`)
  echo "New Replication Controller:  $newName"
  
  echo "Performing a rolling update, this can take a moment..."
  # The output of this action will indicate success/failure
  kubectl rolling-update $currentName -f $newConfiguration

  # Clean up
  rm "$existingConfiguration"

else
  echo "The current replication controller configuration file does not exist.  Please verify that the original was copied over to replication-controller-existing.yaml"
fi
