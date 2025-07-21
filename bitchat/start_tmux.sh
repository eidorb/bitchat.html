#!/bin/bash
SESSION_NAME="bitchat-bois"

tmux new-session -d -s $SESSION_NAME

# Split into three vertical panes
tmux split-window -h -t $SESSION_NAME
tmux split-window -h -t $SESSION_NAME

# Run client apps in each pane
tmux send-keys -t $SESSION_NAME:0.0 "cd bitchat-python && python3 bitchat.py" C-m
tmux send-keys -t $SESSION_NAME:0.1 "cd bitchat-cli && python3 main.py" C-m
tmux send-keys -t $SESSION_NAME:0.2 "bitchat" C-m

# Adjust pane sizes
tmux select-pane -t $SESSION_NAME:0.0
tmux resize-pane -R 20
tmux select-pane -t $SESSION_NAME:0.1
tmux resize-pane -R 20

tmux attach-session -t $SESSION_NAME

# Fallback to shell if tmux exits
exec bash
