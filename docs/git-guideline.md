# Branch Name
  - feature ==> feature/<feature_name>

  eg: Aryan => eg: SwitchButton
      branch => feature/switch-button

# How to create new branch
  - first checkout to master | git checkout master
  - update master branch     | git pull origin master
  - create new branch (current master)  | git checkout -b <Branch_Name>  

    eg: git checkout -b feature/switch-button
  
  - how to commit
    - git add .
    - git commit -m "<commit_message>"
    eg: git commit -m "Add Switch Button"



  - How to push branch
    - git push origin <Branch_Name>
    eg: git push origin feature/switch-button  


# Commit Guideline
  - Commit Message should be short and descriptive
  - Commit Message should be in present tense
  - Commit Message should be in imperative mood
  - Commit Message should be in singular form
  - Commit Message should be in lowercase
  - Commit Message should be in English

  eg: Feature => Switch Button
    commit message => "Feature | Switch Button | disabled condition added"   


# How to delete branch 
  - LOCAL Branch 
     -change branch :  git checkout master
     - which branch you want to delete (temp) : git branch -D <DELETE_Branch_Name>
       eg: git branch -D temp
  - Remote branch (online)    
      - git push origin --delete <DELETE_Branch_Name>
        eg: git push origin --delete temp

# Fetch new branches from remote (online)        
 - git fetch origin