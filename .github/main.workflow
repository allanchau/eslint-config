workflow "Publish to NPM" {
  on = "push"
  resolves = ["Publish"]
}

action "master-branch-filter" {
  args = "branch master"
  uses = "actions/bin/filter@master"
}

action "Tagged commit" {
  args = "tag v*"
  needs = "master-branch-filter"
  uses = "actions/bin/filter@master"
}

action "Publish" {
  args = "publish --access public"
  needs = ["Tagged commit"]
  secrets = ["NPM_AUTH_TOKEN"]
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
}
