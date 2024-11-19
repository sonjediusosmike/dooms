$msg = Read-Host 'What is your commit message:'
git add -A
git commit -m $msg
git push