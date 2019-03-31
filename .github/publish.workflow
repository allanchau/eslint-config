workflow "Publish to NPM" {
  on = "push"
  resolves = ["GitHub Action for Slack"]
}

action "Tagged commit" {
  uses = "actions/bin/filter@master"
  args = "tag v*"
}

action "Publish" {
  needs = "Tagged commit"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
