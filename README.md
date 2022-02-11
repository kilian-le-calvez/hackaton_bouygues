# hackaton_bouygues

## French Persona

Un client Bouygues utilise son smartphone et est connecté au réseau Internet. Il consomme de la donnée et cette consommation est répertorié dans notre application web. À partir des données récoltées, une estimation de la consommation de données de l'utilisateur est formé. 

Ce client se trouve dans les transports et visionne une vidéo youtube en augmentant la qualité d'affichage. À ce moment, notre application envoie une notification de prévention au client en lui informant du pic important d'utilisation des données sur le laps de temps court et l'utilisateur décide donc de baisser la qualité de sa vidéo. 

Maintenant, le client est arrivé chez lui depuis un bon moment et reçoit une autre notification lui disant que sur le moyen/long terme, sa consommation est plus élevé qu'à l'accoutumée. Il se rend compte qu'il utilise encore les données mobiles et décide donc de les désactiver et active à la place le wifi. 

Éventuellement, ces notifications redirigeront l'utilisateur vers les produits Bouygues qui répondront à ses besoins. Ainsi, il prendra un forfait Bouygues adéquat à son niveau de consommation qui l'arrange et Bouygues génère son bénéfice.

## General informations

Objectif : Find a way to innovate about the Bouygues API

We want to use the mobile data informations given by the Bouygues API.

The goal of our product is to warn about the internet data consumption on a Bouygues telecom client's mobile phone.

In the first step we need to recover the mobile data of a connected client.
Then we need to stock them and analyse them to find tendances / averages, and highlight the unnatural mobile data usage.
Then we need to warn the client about his data usage and maybe redirect him to connected Bouygues telecom offers.

## Technicals informations

Our solution will be represented by an API and a mobile application.

In the first hand, for the API:

- We are gonna use Django Python Framework :
Because we need a back language to make the whole API
Because Python is good language to deal with maths, numbers, averages, etc...

In the second hand, for the Mobile Application:

- We are gonna use Flutter :
Because is more convenient to build on IOS and Android
Because we need a simple application