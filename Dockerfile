# FROM openjdk:17-jdk-alpine
# EXPOSE 8080
# COPY target/teste_safety-0.0.1-SNAPSHOT.jar app.jar
# # ADD ${JAR_FILE} app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]

FROM maven:3.8.3-openjdk-17 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn clean package  -Dmaven.test.skip -f /home/app/pom.xml
EXPOSE 8080
ENTRYPOINT ["java","-jar","/home/app/target/teste_safety-0.0.1-SNAPSHOT.jar"]