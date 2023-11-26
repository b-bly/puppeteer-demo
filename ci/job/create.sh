#!/bin/bash

gcloud beta run jobs deploy $JOB_NAME --image $IMAGE --tasks 1
