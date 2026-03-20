# Propositions d'améliorations du projet

Ce document propose des pistes d'évolution concrètes pour le mini-jeu interactif.

## 1) Expérience utilisateur

- **Ajouter un écran d'accueil** avec bouton "Commencer", réglages du son et rappel rapide du concept.
- **Afficher un récapitulatif des choix** à la fin de partie (timeline des décisions).
- **Permettre de revenir au dernier choix** ("Annuler") pour encourager l'exploration des branches.
- **Ajouter une sauvegarde automatique** (localStorage) pour reprendre une partie interrompue.

## 2) Accessibilité

- **Améliorer la navigation clavier** (focus visibles, ordre de tabulation logique).
- **Ajouter des attributs ARIA** sur les éléments interactifs (boutons, barre de progression, zones dynamiques).
- **Vérifier le contraste des couleurs** pour se conformer au WCAG AA.
- **Ajouter une option "réduire les animations"** pour les personnes sensibles aux mouvements.

## 3) Narration et rejouabilité

- **Créer de nouveaux scénarios** (crise RP, lancement produit, collaboration influenceurs).
- **Introduire des variables de score** (notoriété, engagement, crédibilité).
- **Débloquer des fins secrètes** selon des combinaisons de choix.
- **Ajouter des événements aléatoires légers** pour varier chaque session.

## 4) Qualité technique

- **Structurer le jeu sous forme de données JSON** (scènes, options, transitions) pour simplifier l'ajout de contenus.
- **Séparer la logique de rendu et la logique métier** en fonctions/modules dédiés.
- **Mettre en place un linter** (ESLint) + formatage (Prettier) pour homogénéiser le code.
- **Ajouter des tests unitaires** sur la logique de progression (ex: calcul de score et transitions).

## 5) Performance

- **Compresser les assets** (images/audio) pour réduire le temps de chargement.
- **Précharger les ressources critiques** (image de fond, son principal).
- **Éviter les reflows inutiles** en regroupant les mises à jour DOM.

## 6) Valorisation portfolio

- **Ajouter une section "coulisses"** expliquant les choix UX et communication.
- **Inclure des métriques** (temps moyen de jeu, taux de complétion, fins les plus obtenues).
- **Proposer une version bilingue FR/EN** pour élargir l'audience recruteur.
- **Ajouter un mode "recruteur pressé"** (version courte en 2-3 minutes).

## 7) Roadmap suggérée (itérations)

1. **V1.1 (rapide)** : accessibilité clavier, contrastes, sauvegarde locale.
2. **V1.2** : score + écran de fin enrichi + nouvelles branches narratives.
3. **V1.3** : refactor en structure JSON + tests + instrumentation analytics.
4. **V2.0** : mode bilingue + tableau de bord portfolio + nouvelles histoires.
