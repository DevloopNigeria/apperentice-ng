A quick tip to get up to speed
---

Install Docker from 

https://docs.docker.com/docker-for-windows/install/ 

or choose your preferred platform.
Also if you care about running other virtual machines via oracle virtual box, vmware etc or the size of Docker for windows is too overbearing, then install docker from 

https://download.docker.com/win/stable/DockerToolbox.exe 

But note that Docker for Windows is faster because it uses native windows Hyper-V for its orchestrations.
If you really do not mind the size and not interested in running virtual box and the likes then Docker for Windows is a better option over Docker toolbox.

Haven completed the installation, 
open git terminal or command prompt and type in

`docker --version`
> Docker version 18.03.0-ce, build 0520e24

If result is similar to above then it installed.

Also if you are connected to the internet, quickly type in your terminal

`docker run hello-world`

It should return 
>Hello from Docker!

And some other info. Then we are good to go.

---
For this project, most of the dependencies have been built in i.e. 

Flask(1.0.2) fixed at this version to prevent breaking upgrades,
uWSGI(2.0.17.1),
pymongo,
mongoengine,
redis, 
nginx.

But there are basically four(4) services flask which is the api server, mongodb database, redis (should be used to store sessions, maybe caching & queueing etc), and nginx frontend server. Each service has a dockerfile equivalent kept at the root directory. They only need to be edited only when necessary as changes might break the whole setup.

The **requirements.txt** and **docker-compose.yml** files in the root directory contains some info you might need during development. You might edit them when necessary but beware of changes that could break the whole setup.

Codes needed at finger tip
---
  From Docker command Terminal (preferrably) or git bash or command prompt ensure to navigate to the root folder of this project i.e flask-api 
  
  To run all container services needed for project architecture, use
  `docker-compose up -d` 
  
  To stop the services, use `docker-compose stop`
  
  To access this flask api/web app from browser or Postman, first get your docker-machine ip using
  `docker-machine ip`
  Then the URL becomes http://docker-machine ip:5000
  
  Except it changes, usually it is 
  
  http://192.168.99.100:5000
  
  And for https
  
  http://192.168.99.100:5443
  
  Alternatively, 
  using the docker-machine ip you go from above, download the file below and extract, run **Hosts File Editor+.exe**
  
  https://hostsfileseditor.weebly.com/uploads/4/3/8/7/43878877/hosts_file_editor.zip
  
  When it comes up enter docker-machine ip, 192.168.99.100, in IP Address, and 
  apprenticeng.local, in Host name. Click Add, Click the green open padlock, click save and click the red closed padlock. Exit the _Hosts File Editor+.exe_ 
  
  You can now access this app via this url
  
  http://apprenticeng.local:5000
  
  Also, https url can be accessed via
  
  https://apprenticeng.local:5443
  
  Get GUI Software to connect to mongodb, download free Robomongo (now Robo 3T) from
  
  https://robomongo.org/download
  
  Connect using **docker-machine** ip got from above and port is **27017**
  
  Get GUI to connect to redis database, download free from
  
  https://fastoredis.com/downloads/windows/fastoredis-1.23.2-x86_64.exe
  
  Connect using **docker-machine ip** got from above, port is **6379**, and password is **devpassword**
  
  **NB:**
  If you installed Docker for Windows instead of Docker Toolbox, then **localhost** or **127.0.0.1** would likely work in place of **docker-machine ip**. 
  Also, the first time you run `docker-compose up -d`, you would need an internet connection and it would take sometime and data to build and get up & running. But after that, the next time you run `docker-compose up -d ` for this project would be a breeze. But, anything you edit the Dockerfile configurations, you would need run `docker-compose stop`, if containers are still running, then `docker-compose build` to build up containers with the new configuration. Then finally, `docker-compose up -d`, to start up the container services as a daemon.
   
  Further tips, visit links below
  ---
  https://docs.docker.com/compose/reference/overview/
  
  https://docs.docker.com/engine/reference/commandline/cli/
  
  https://hackernoon.com/docker-commands-the-ultimate-cheat-sheet-994ac78e2888
  
  https://github.com/wsargent/docker-cheat-sheet
  
  
  **Happy Coding, Gabcares**
  