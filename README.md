# Maptime # 11 Datalab!


### Datalab links

317 datasets. Static data to download.
[data.amsterdam.nl](data.amsterdam.nl)

20 API's . Dynamic data. Atlas build on top of it. 
[api.datapunt.nl](https://api.datapunt.amsterdam.nl/api/)
(Atlas not open yet..)


### QGIS

QGIS [general](http://www.qgis.org/nl/docs/index.html) officail Dutch QGIS manual

Dutch tutorial for WMS/WFS in Qgis:
[pdf](/qgis_-_webservices.pdf)

### Web development

Leaflet, Openlayers, Google working examples from datalab:

[https://github.com/DatapuntAmsterdam/datapunt_base_layer](https://github.com/DatapuntAmsterdam/datapunt_base_layer)

## What to do with the API's

For tonight, use the [api.datapunt.nl](https://api.datapunt.amsterdam.nl/api/)! Have a look at the acces points and documentation. 

### The really nerdy option
Urls are data as JSON. Use phyton, javascript or any other programming language or interface to request the data.
For example in javascript:

	var data = requests.get(https://api.datapunt.amsterdam.nl/bag/pand/03630013000707/)
	print(data)
	data.geometrie.coordinates[0][0]

## Postman
Developing APIs is hard. Postman makes it easy. Have a look at:
[https://www.getpostman.com/](https://www.getpostman.com/)

Maptime is BYOB,  you can bring your own dinner, snacks, drinks and beers. Some drinks and snacks are provided by Datalab tonight!


## About Maptime AMS

Maptime Amsterdam is a monthly map hack night hosted by Waag Society. We meet once a month on a Wednesday at 18.30 to work on maps, learn about geospatial data, and teach each other the latest cartographic tools.

Maptime is, rather literally, time for mapmaking. Our mission is to open the doors of cartographic possibility to anyone interested by creating a time and space for collaborative learning, exploration, and map creation using mapping tools and technologies.

This open learning environment for all levels and degrees of knowledge offers intentional support for the beginner. Maptime is simultaneously flexible and structured: creating space for workshops, ongoing projects with a shared goal, and independent/collaborative work time.

Inspiration for Maptime comes from both hack nights and knitting circles. Both are models of spaces for people to create and learn together. Our goal is to provide this space with an open heart and witho

ut pretension. You can bring your own projects to work on, just hang out and socialize, or ask questions. Some people are experts, and some people are just getting started, but all of us are learning. So, why not do it together?

Follow us at twitter @maptimeAMS and code.waag.org/maptimeAMS
For more information about Maptime visit: maptime.io

