#!/bin/bash

`git add * 2>/dev/null`

`git commit -am $1`

`git push`

`gatsby build 2>/dev/null`

`surge public/ franblog.surge.sh 2>/dev/null`
