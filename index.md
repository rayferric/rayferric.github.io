---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---

# Hello, world!

Witaj na tymczasowej stronie zastępczej stworzonej tylko i wyłącznie po to by spełnić wymagania punktu 1.f.

Głównym zadaniem tej strony będzie przedstawienie (3.c.) procesu deploymentu mojej [**prawdziwej strony**](https://rayferric.xyz) przy użyciu usługi Microsoft Azure (3.a.).

### Uwaga

Jest to opis procesu umieszczania strony na Microsoft Azure pod adresem `alt.rayferric.xyz`, lecz strona została później zaktualizowana i przeniesiona na serwery Oracle pod adres `rayferric.xyz`. Hiperłącza w tym artykule zostały zaktualizowane tak by wskazywać na zmienioną stronę, a cała reszta pozostała bez zmian.

### Zastosowane Technologie

- NodeJS
- ReactJS poprzez `create-react-app`
- ExpressJS
- Docker
- Debian
- *...i wiele więcej...*

### Moja Strona

Pół roku temu stworzyłem swoją stronę przy pomocy [**ReactJS**](https://reactjs.org). Strona zawiera moje dane kontaktowe oraz krótki opis mojej osoby. Dodatkowo znajduje się tam sekcja blogowa z, jak na ten czas, jednym postem. Posty na moją stronę pisane są w języku Markdown, który jest następnie just-in-time renderowany przez Reacta po stronie klienta. Pod każdym postem znajduje się intuicyjna sekcja komentarzy napędzana przez oparty na GitHub Issues widżet, [**utterances**](https://utteranc.es) 🔮. Strona była przygotowana już wcześniej, tak więc moim zadaniem było przeniesienie jej z ekosystemu GitHub Pages na serwery Azure.

![](/img/rayferric.xyz.png)

### Konfiguracja Maszyny Wirtualnej Azure

Z uwagi na ten zestaw zadań, moją stronę musiałem przenieść z GitHub Pages by zrobić miejsce dla nowej strony opartej na Jekyllu. Postanowiłem połączyć podpunkty 1. oraz 3. i wykorzystać moją istniejącą stronę do przetestowania usług Azure.

Do hostowania mojej strony wykorzystałem darmowy dostęp do infrastruktury maszyn wirtualnych Azure w ramach studiów na AGH UST.
Poprzez panel Microsoft Azure stworzyłem darmową maszynę wirtualną opartą na dystrybucji Linuxa - Debian Bullseye.

![](/img/azure.png)

Podczas konfiguracji systemu otworzyłem porty HTTP, HTTPS i SSH oraz skonfigurowałem dane logowania dla domyślnego użytkownika. Po zaledwie paru minutach maszyna wirtualna była zwarta i gotowa do pracy.

![](/img/ssh.png)

### Domena oraz Certyfikacja HTTPS

Zabierając się za przenoszenie mojej strony postawiłem przed sobą cel żeby zarejestrować dla niej własną domenę wraz z certyfikatem HTTPS.
Domenę zakupiłem w znanym i szanowanym przez profesjonalistów serwisie [**Cloudflare**](https://www.cloudflare.com), a do uzyskania certyfikatu wykorzystałem zaufany urząd certyfikacji [**Let's Encrypt**](https://letsencrypt.org).

![](/img/cloudflare.png)

Następnym krokiem było połączenie wszystkich cegiełek w spójną całość. W tym celu wykorzystałem inny z moich tegorocznych projektów, [**HTTPS Proxy**](https://github.com/rayferric/https-proxy). Jest to prosty w konfiguracji serwer HTTPS przekazujący otrzymane zapytania do oddzielnego serwera HTTP. Dzięki temu narzędziu deweloper nie musi przejmować się samodzielną konfiguracją serwera HTTPS oraz odświeżaniem certyfikatów - wystarczy, że napisze zwykły serwer HTTP, a HTTPS Proxy zajmie się całą resztą. HTTPS Proxy wykorzystuje framework ExpressJS wraz z TypeScriptem, a całość zamknięta jest w gotowym do użycia kontenerze Dockera. Dzięki temu na docelowej maszynie nie musiałem nawet instalować NodeJS.

```bash
$ git clone https://github.com/rayferric/https-proxy.git
$ cd https-proxy
$ vim docker-compose.yml
# :%s/example.com/alt.rayferric.xyz
# :qw
$ sudo docker-compose up -d
$ certbot certonly --webroot -w /tmp/certbot-static/ -d alt.rayferric.xyz
```

### Zastępczy Serwer Statyczny

Ostatnim krokiem było napisanie oraz skonteneryzowanie przeze mnie zastępczego serwera HTTP który, podobnie jak backend GitHub Pages, wysyłałby użytkownikowi zawartość plików na serwerze z moją stroną. Zajęło mi to ok. 10 minut, a efekty pracy były natychmiastowe.

![](/img/serve.png)

### Podsumowanie

Gotową stronę można odwiedzić klikając [**tutaj**](https://rayferric.xyz).

Dziękuję za uwagę.

<div style="height: 100px;"></div>

---


<div style="display: flex; justify-content: center; color: gray;">
Copyright © 2022 Rafał Żelazko (Ray Ferric)
</div>


