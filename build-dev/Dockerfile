FROM python:3.6
LABEL maintainer 'Aluno Cod3r <aluno at cod3r.com.br>'

RUN useradd edfcsx && \
    mkdir /app && \
    mkdir /log && \
    chown edfcsx /log

USER edfcsx
VOLUME /log
WORKDIR /app
EXPOSE 8000

ENTRYPOINT ["/usr/local/bin/python"]
CMD ["run.py"]