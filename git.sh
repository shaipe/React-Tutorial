cd ~/workspace/react/tutorial/
git pull
git add .

# 提示输入提交信息
echo -n "input commit message:"
read input_msg

# 开始提交代码
git commit -a -m "$input_msg"
git push

echo "git commit and push success"