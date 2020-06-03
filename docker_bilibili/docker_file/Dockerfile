FROM python:3.6
MAINTAINER Bossen <bossenCheung@gmail.com>
WORKDIR /app
ENV PATH /usr/local/bin:$PATH
ADD . /code
ADD ./docker_file/requirements.txt .
RUN pip3 install -r requirements.txt -i https://pypi.doubanio.com/simple/ --trusted-host pypi.doubanio.com