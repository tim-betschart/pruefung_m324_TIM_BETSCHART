# ict-m324 - Programmieraufgabe 2

## Git, GitHub, Release, Automatisierung

Git ist eine Software, mit der Sie Änderungen an einem Projekt im Laufe der Zeit verfolgen können.
Ein DevOps Engineer nutzt Git täglich für die Arbeit an Code, Infrastruktur und Deployment-Prozessen, wodurch es eines der wichtigsten Tools im DevOps-Toolkit ist.

Lernziele:

- Grundlagen von Versionskontrolle, Branching, Pull Requests und Konfliktlösung.
- Erstellen von Releases und Hosting mit GitHub Pages.
- Automatisierung Skript schreiben

## 1. Einrichtung: Ihr Entwicklungs-Setup

### Entwicklungsumgebung vorbereiten

Falls Sie noch nie mit Git und GitHub gearbeitet haben.

1. **Installieren Sie Ihre bevorzugte IDE**
2. **Installieren Sie Git**
3. **Erstellen Sie ein GitHub-Konto**

### Repository erstellen und klonen

- **Erstellen Sie ein neues Repository**: Legen Sie ein neues _public_ Repository auf GitHub.com an.
- **Wichtig**:Der Name des Repository sollte das Wort _m324-task-2-git_ und ihren _Vor- und Nachnamen_ enthalten.
- Wählen Sie die Option "README.md" erstellen, damit es schon einen main Branch hat. Klonen Sie dann das Remote Repository auf Ihr lokales System.
- **Öffnen Sie das Repository in der IDE**: Nutzen Sie Ihre IDE, um das geklonte Repository für die Entwicklung vorzubereiten.

### Dateien initialisieren

- **Erstellen Sie eine `index.html`-Datei**: Diese Datei dient zur Demonstration grundlegender Git-Befehle. Pushen Sie die Datei in den main Branch.

## 2. Git verwenden

### Git-Befehle ausführen

- Wechseln Sie auf den main branch. Erstellen Sie einen neuen Branch für die Feature-Entwicklung.
    ```bash
    git checkout -b feature-branch
    ```
- Ändern Sie index.html: Fügen Sie neuen Inhalt zur Datei hinzu.
- `git status`: Überprüfen Sie den aktuellen Status des Repositories und identifizieren Sie unversionierte Änderungen.
- `git add .`: Fügen Sie alle Änderungen zum Staging-Bereich hinzu.
- Committen Sie die Änderung im HTML und pushen Sie die ihren neuen Branch.
- `git commit -m "Initial commit"`: Speichern Sie die Änderungen in der Historie des Repositories.
- `git log`: Zeigen Sie die Commit-Historie an, um den Fortschritt zu überprüfen.
- Kontrollieren Sie auf github.com, ob ihr neuer Branch da ist.

### Pull Request öffnen

Ein Pull Request oder Merge Request bezeichnet in der Versionsverwaltung einen Arbeitsablauf, Quellcode-Änderungen in Softwareprojekten vorzunehmen.

- Wenn Sie ihren neuen Branch gepusht haben, erscheint auf der Startseite ihres Repositories ein Button "Compare & pull request". Klicken Sie auf diesen Button, um einen Pull Request zu erstellen.
- Erstellen Sie ein Code Review, indem Sie als Kommentar "LGTM" (Looks good to me) schreiben und anschliessend den Pull Request mergen. Der Feature Branch sollte automatisch gelöscht werden.

## 3. Git Merge-Konflikt

### Setup

- Erstellen Sie einen neuen Branch _conflict-change_
- Ändern Sie etwas auf der ersten Zeile im index.html
- Pushen Sie ihren neuen Branch und erstellen Sie einen Pull Request.
- Wechseln Sie auf den main Branch.
- Ändern Sie etwas auf der ersten Zeile im index.html.
- Pushen Sie die Änderung in den main Branch.
- Öffnen Sie nun ihren Pull Request für den Branch _conflict-change_.
- Unten sollte sichtbar sein, dass der Pull Request nicht gemerged werden kann wegen einem Konflikt.
- Lösen Sie den Konflikt. Mergen Sie dafür den main Branch in den Branch _conflict-change_ (git checkout conflict-change && git merge main). Verwenden Sie geeignete Tools wie Visual Studio. Beispiel hier: https://www.youtube.com/watch?v=ybCxPHzRJfA
  Das Resultat sollte sein, dass der Stand im main übernommen wird. Verwenden Sie in ihren Konflikt Editor, ohne den Code manuell zu ändern.
- Mergen Sie anschliessend den Pull Request.

## 4. Release erstellen und deployen

### Release erstellen

- Klicken Sie im Menü des Repositories auf den Reiter **Releases**.
- Klicken Sie auf **Create a new release**.
  Geben Sie eine **Tag-Version** ein (z.B. `v1.0.0`).
    - Sie können auch einen Branch oder Commit auswählen, auf dem das Release basieren soll.
- Geben Sie einen **Titel** für das Release ein (z.B. "Erstes offizielles Release").
- Fügen Sie eine **Beschreibung** hinzu, die die Änderungen oder neuen Features des Releases beschreibt.
- Optional: Sie können Dateien oder Builds als **Assets** zum Release hinzufügen, indem Sie sie hochladen.
- Klicken Sie auf **Publish release**, um das Release zu erstellen und öffentlich zu machen.

### Website auf GitHub Pages veröffentlichen

- Releasen Sie eine Website mit GitHub Pages.
- Recherchieren Sie, wie eine Website mit GitHub Pages funktioniert.
- Als Resultat bekommen Sie eine URL, die öfffentlich erreichbar ist und den Inhalt der Datei index.html als Website darstellt.
- Achten Sie auf die Einträge bei "Actions", um das Deployment nachzuvollziehen. Sie werden später ihre eigenen GitHub Actions erstellen.

## 5. Automatisierung

- Auf ihrer GitHub Pages Website soll diese README.md Datei ausgegeben werden.
- Schreiben Sie einen Prozess für die Konvertierung von Markdown in HTML, den Sie automatisiert ausführen können (PowerShell/Bash). Beispiel: `sh convert.sh` konvertiert die Datei README.md in HTML und erstellt die Datei index.html.
- Automatisieren Sie den Prozess. Das Ziel ist, dass nicht vergessen wird index.html zu updaten, wenn sich README.md ändert.
