#!/bin/bash

`git commit -am $1`

`git push`

`gatsby build`

`surge public/ franblog.surge.sh`
