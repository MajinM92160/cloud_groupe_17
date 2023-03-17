server {
    listen 80;
    server_name 17.7.1993;
    root /home/groupe17/front_app/dist;
    index index.html;
    location / {
        try_files $uri $uri/ =404;
    }
}
