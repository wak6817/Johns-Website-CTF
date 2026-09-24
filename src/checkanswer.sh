#!/bin/sh

EXPECTED='john{tiny_web_things_are_fun}'

if [ "$#" -lt 1 ]; then
  echo "Usage: ./checkanswer.sh 'john{tiny_web_things_are_fun}'"
  exit 1
fi

ANSWER=$(printf '%s' "$1" | tr -d '\r\n')

if [ "$ANSWER" = "$EXPECTED" ]; then
  echo "Correct! You found the flag: $EXPECTED"
  exit 0
else
  echo "Incorrect. Expected: $EXPECTED"
  echo "You entered: $ANSWER"
  exit 1
fi

