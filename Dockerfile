FROM httpd:2.4
RUN apt update
RUN apt upgrade
COPY ./html/ /usr/local/apache2/htdocs
