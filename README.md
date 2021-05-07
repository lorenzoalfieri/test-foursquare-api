# test-foursquare-api
Pour lancer le projet, il faut en premier installer les paquets avec la commande `npm install`, puis faire `npm start`.

Les tests unitaires se trouvent dans `src/__tests__/` et pour les lancer vous pouvez utiliser la commande `npm test`.

Les tests E2E se trouvent dans `__tests-E2E__` et pour les lancer, vous pouvez utiliser la commande `npm run testcafe`. Vous devez avoir chrome installé sur votre ordinateur, si vous voulez utiliser un autre navigateur pour les tests, il vous suffit de changer le navigateur "chrome" dans le package.json à la ligne script "testcafe".

Pour ce projet, j'ai décidé d'utiliser la dernière version de react disponible, ainsi que material-ui en librairie externe pour le design.
Pour donner un peu de contexte, j'ai ajouté une nav bar même si elle n'a qu'un lien. Il n'y a pas de page 404 car il y a une redirection automatique à la page Dashboard quelle que soit l'URL que l'on entre.

Dans un vrai contexte de production, l'application ne serait pas architecturée comme cela, il y aurait un vrai backend qui aurait fait lui les requêtes à l'api externe, j'aurais pu à ce moment les mock pour unit test l'affichage des messages en front.

J'ai gardé une architecture classique, un dossier route, un dossier components qui contient les sous-components. Dans un contexte plus large avec plus de components et de pages, je partirai surement vers une architecture en Epic, quoique peut être plus une architecture atomique pour éviter au maximum la duplication de code.

Pour les tests unitaires, j'ai choisi jest, classique pour tester dû react, et j'ai rajouté une surcouche facile à utiliser que j'ai découverte il n’y a pas longtemps, https://testing-library.com/

Pour les tests E2E, j'ai choisi testcafe, j'ai pas mal d'expérience avec, facile à utiliser et très complet.

J'ai mis environ 1 jour à 1 jour et demi de travail au total.
