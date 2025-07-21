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

tmux attach-session -t $SESSION_NAME
