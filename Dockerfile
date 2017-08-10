FROM technoplus/laravel

# Avoid ERROR: invoke-rc.d: policy-rc.d denied execution of start.
RUN sed -i "s/^exit 101$/exit 0/" /usr/sbin/policy-rc.d

EXPOSE 22
EXPOSE 80
EXPOSE 3306

# Default command for container, start supervisor
CMD supervisord --nodaemon
USER root
