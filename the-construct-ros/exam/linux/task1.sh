#!/bin/bash

# Move to the linux_exam directory (assuming current location is the parent)
cd catkin_ws/src/linux_exam

# Create the nested folder structure (using mkdir -p for parent creation)
mkdir -p this/is/my/linux/exam

# Create the Python file inside the final 'exam' folder
touch this/is/my/linux/exam/my_file.py

# Print the confirmation message
echo "The script has successfully created the folder structure and file."
