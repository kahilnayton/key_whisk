// Turn this into a function

curl -X POST https://api.github.com/repos/:owner/:repo/dispatches \
-H 'Accept: application/vnd.github.everest-preview+json' \
-H 'Authorization: token $TOKEN' \
--data '{"event_type": "$CUSTOM_ACTION_NAME"}'