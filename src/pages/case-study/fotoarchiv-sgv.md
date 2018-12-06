---
title: Fotoarchiv der SGV
callToAction: Wie wir die Fotosammlung der Schweizerischen Gesellschaft für Volkskunde allen zugänglich gemacht haben.
order: 1
image: '../portfolio/sgv.png'
header: './sgv-header.png'
---
Die Vergangenheit bewahren. Für alle.

Für das Fotoarchiv der Schweizerischen Gesellschaft für Volkskunde (SGV) durften wir ein Front-end entwerfen und umsetzen. Das vorrangige Ziel dabei: Benutzerfreundlichkeit, damit das Archiv auch wirklich allen offen steht. Das Resultat ist eine Angular-App, die sich durch viel Liebe zum Detail auszeichnet.

<figure>

![Eine Master-Ansicht](./header.png)

<figcaption>
Eine Übersichtsdarstellung von Bildern auf einem grossen Bildschirm
</figcaption>
</figure>

Das Fotoarchiv der Schweizerischen Gesellschaft für Volkskunde (SGV) hat in jahrelanger Arbeit alte Sammlungen und Neuschenkungen katalogisiert, restaurieren lassen und mit der Hilfe des [DHLab]() der Universität Basel digitalisiert. Mit unserer App sind nun fast 100'000 Bilder der Öffentlichkeit zugänglich.

<figure>

![Eine Detail-Ansicht](./detail-view.png)

<figcaption>
Detailansicht eines Bildes auf einem grossen Bildschirm
</figcaption>
</figure>

Die Fotos können mit einer Volltextsuche abgerufen oder nach ihrer Sammlung georndet abgerufen werden. Der Klick auf das Kompassicon zeigt aber noch viele weitere Wege an, Bilder zu gruppieren. So können sie mit dem entsprechenden UI nach Datum, Ort, Technik oder abgiebildeter Personen geordnet werden. Dieser *Discovery-Mode* bietet auch das Suchen nach der Schnittmenge mehrerer Kriterien gleichzeitig. Die Einzelansichten der Fotos bieten eine Toolbox mit der Bilder unter anderem hereingezoomt oder rotiert werden können. Die Favoriten-Funktion speichert Fotos bis zum nächsten Besuch der Seite im Browser, so dass über mehrere Sitzungen hinweg Konglomerate zusammengestellt werden können.

Um eine so feature-reiche App wirklich *responsive* zu machen, benötigt es vor allem auch Innovation im Kleinen. Wir nutzen daher die Gelegenheit, hier noch einmal zwei unserer Lieblingsfeatures herauszuheben: Erstens eine vertikale Paginierung, die auf Smartphones über andere fixierte Buttons gestapelt werden kann, ohne unten wertvollen Platz zu verbrauchen.

<figure>

![Paginierung](./ui-paginierung.png)

<figcaption>
Detail der vertikalen Paginierung
</figcaption>
</figure>

Dann zweitens unsere Version einer Filterliste, die sich als Pattern zu Recht zunehmender Beliebtheit erfreut, und hier noch zusätzlich als hierarchische Liste präsentiert wird, so dass zum Beispiel gemeinsam Kontinente und Schweizer Dörfer gesucht, aber nicht verwechselt werden können.

<figure>

![Filterliste](./ui-filter-liste.png)

<figcaption>
Eine filterbare, aber dennoch hierarchische Liste der mit den Bildern verknüpften Orte.
</figcaption>
</figure>
