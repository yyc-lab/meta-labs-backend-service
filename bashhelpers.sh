# Bash Helper Functions
# add to your ~/bashrc:
#     source [~/path_to_here]/bashhelpers.sh
# OR run this command when in this directory:
#     source bashhelpers.sh

### DOCKER HELPER FUNCTIONS

# docker-compose build - builds your docker containers
function dcb() {
    # takes: service
    docker-compose build $@
}

# docker-compose down - turns off containers and network
function dcd() {
    docker-compose down
}

# docker-compose run remove - for running a command within the server
function dcrr() {
    # takes: command
    docker-compose run --rm server $@
}

# docker-compose up - spins up docker environment
function dcu() {
    # takes: [flags] service
    # eg: dcu -d server (launches server in background)
    docker-compose up $@
}

# ALIASES
git config --global alias.amend 'commit --amend --no-edit'
git config --global alias.shove 'push --no-verify -u origin HEAD'
alias ..='cd ..'
