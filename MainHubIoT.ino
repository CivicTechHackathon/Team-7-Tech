#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

// Set these to run example.
#define FIREBASE_HOST "smartsewer-de7fd.firebaseio.com"
#define FIREBASE_AUTH "cIFoiSm7erdAP3HP1Y37QfkCbXzKwIP9hKctQNgU"
#define WIFI_SSID "LMKT"
#define WIFI_PASSWORD "LMkt@786"

#define TRIGGERPIN D5
#define ECHOPIN    D6

void setup() {
  Serial.begin(9600);
  pinMode(TRIGGERPIN, OUTPUT);
  pinMode(ECHOPIN, INPUT);
  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.println("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  
}

void loop() {
  long duration, distance, inches;
  String Node = "/Districts/Central/Unions/Uc-01/Devices/Device01/Manholes/ManHole01/Distance";
  digitalWrite(TRIGGERPIN, LOW);
  delayMicroseconds(3);
  digitalWrite(TRIGGERPIN, HIGH);
  delayMicroseconds(12);
  digitalWrite(TRIGGERPIN, LOW);
  duration = pulseIn(ECHOPIN, HIGH);
  distance = (duration / 2) / 29.1;
  inches = distance*0.39370;
  Serial.print(inches);
  Serial.println(" Inches");
  Serial.print(inches);
  Firebase.setInt(Node, inches);
  Serial.println(" Inches");
  Serial.println();
  delay(1000);
}