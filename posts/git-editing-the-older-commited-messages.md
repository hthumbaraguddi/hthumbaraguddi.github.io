```
git rebase -i HEAD~<number of commit messages>
now you and change pick to revert
close the editor. 
Git will open another winodow where one can enter the message. edit the commit message and close the editor.
git push -f origin <Branch name>
```