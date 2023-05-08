---
title: AI-strategi
date: 2023-05-01
version: 1.0.0
draft: true
authors: [mb@variant.no]
---

Dette dokumentet beskriver hvordan Variant skal forholde seg til AI og
språkmodeller (LLMs) som verktøy, mulighet for kunder og i arbeidshverdagen.
Hensikten med dokumentet er å veilede konsulenter i Variant å ta korrekte valg
for bruk av AI som ivaretar kunders interesser, lover, forutinntatthet, men også
sikrer at vi bruker verktøyet til å skape den verdien det har potensialet til.
Dokumentet skal kunne brukes for å avdekke hva som er innenfor og hva som er
utenfor både internt i Variant og eksternt ute hos kunder.

**Variant skal være best-in-class med bruk av AI**. Ikke bare være gode på å
bruke AI, men bruke AI _korrekt_ og _etisk korrekt_. Det å bruke AI korrekt
innebærer at vi alltid tar hensyn til noen nøkkelfaktorer:

- Personvern
- Kulturell- og likestillingsmessig forutinntatthet.
- Sikkerhet
- Lisenser
- Åndsverk

Mest av alt skal vi være best-in-class med å aktivt bygge god kompetanse.
Kompetanse om praktisk bruk og identifisere muligheter det gir oss og kunder.

## Bruk av AI oppfordret

AI er et verktøy som utvikler seg raskere og blir mer og mer tilgjengelig, i
langt større grad enn det var mulig å se for seg. Selv om AI ikke kommer til å
gjøre utviklere, designere eller prosjektledere avleggs, påvirker det alt og
kommer til å påvirke oss i større grad fremover. Vi blir ikke erstattet av AI,
men vi kan bli erstattet av noen som er flinke til å bruke AI. Som konsulenter
er dette en utvikling vi må delta i og bruke aktivt i det daglige for å få de
fulle fordelene av det, samtidig som vi gjør det på en etisk og lovmessig
forsvarlig måte.

Alle konsulenter i Variant burde lære seg bruk av AI og språkmodeller på ulike
måter:

1. **Bruk av AI som verktøy for daglige oppgaver**. Herunder ting som GPT,
   bildegenerering med DALL-E, Midjourny og lignende tjenester. Dette er viktig
   å kunne bruke som støtte i hverdagen og vil kunne gi godt innspill og
   inspirasjon hvor det ellers kan være vanskelig å få tak i.
2. **Bruk av AI for å identifisere nye muligheter ute hos kunde**. AI og
   spesielt språkmodeller som LLM kan gi store gevinster som grensesnitt og
   verktøy for kunden. Vi som konsulenter må henge med på utviklingen for å
   lettere kunne identifisere nye områder hvor det kan gi verdi for kunden å ta
   i bruk AI som teknologi. Dette kan være som grensesnitt for konsumering,
   interne analyse verktøy, eller prosessering og syntisering av data. For å
   kunne komme med anbefalinger og ta i bruk dette som verktøy krever det at vi
   følger med på utviklingen.

Begge disse områdene forutsetter at vi jobber og får praktiske erfaringer med
bruk av AI. Både som konsumenter og produsenter. Det krever at vi følger med på
utviklingen og er nysgjerrige.

Utviklingen til AI og nytten det viser seg å ha vil føre til et skille fremover.
De som kan være med på utviklingen, og de som blir værende tilbake og ikke kan
omstille seg.

### Kompetansebygging

Praktisk erfarting er nøkkelord. Det vil bygge viktig og relevant kompetanse og
det krever at hver og enkelt av oss gjør en innsats. Vi skal bygge kompetanse på
følgende måte:

1. Utforske og teste ut nye verktøy og modeller som kommer. Eksempelvis:
   1. ChatGPT for inspirasjon og sparring på løsninger.
   2. Midjourney og DALL-E til presentasjoner, demoer, bloggposter, etc.
2. Gjennomføre test-caser på trening av modeller selv.
3. Samarbeide med kunder for proof of concepts, prototyper og reelle
   implementasjoner hvor mulig.
4. Aktiv delingskultur på lærdommer, erfaringer og lesestoff via Slack,
   bloggposter, etc.

Som et kompetansehus er det spesielt viktig at vi her bygger reelle erfaringer
som stikker dypere enn overfladisk kunnskap. Vi må teste ut og få praktiske
erfaringer.

### Utforsking i Variant

Variant skal få praktisk erfaring med ulik bruk av AI og spesielt LLMs med å
utforske i praksis. Dette skal gjøres med å teste ut gradvis mer komplekse
løsninger over tid. Løsninger som skal utforskes er:

- Håndbok
- CV-baser (privat)
- Salgsdokumenter (privat)
- Kunde sandboxes (privat)

## Kundeinvolvering

Vi skal kontinuerlig identifisere kunde caser og samarbeidscaser hvor det er
naturlig å bruke AI. Her skal Variant kunne være samarbeidspartner for kunder
som ønsker å gå i front.

## Veiledning for bruk av AI i oppdrag

AI og LLMs har ikke fasit og vet ingenting om resultatet de selv gir. Det er
viktig å behandle resultater varsomt for å unngå biases, sikkerhetsrisiko,
lisensbrudd, personvernslekasje og kundeinformasjon. Her er et sett med
kjøreregler som må tenkes på.

### Unngå

1. Ikke send kode eller tekster fra kunde til offentlige modeller som samler
   informasjonen. Dette gjelder tjenester som ChatGPT og andre. Sjekk at
   tjenesten ikke overfører prompts og inputs. Innsamling av info må deaktiveres
   for Copilot. Foretrekk Tabnine som alternativ til Copilot.
2. Aldri bruk kode eller tekst ukritisk fra LLMs. Resultatet av språkmodeller må
   verifiseres og sikres for at det ikke inneholder feil, sikkerhetshull og
   gir/viser faktisk ønsket effekt.
3. Ikke send inn personinformasjon til eksterne verktøy du ikke har kontroll på.
4. Vær kritisk til autocompletions fra AI i kode. Vær sikker på at du forstår og
   at eventuelle lisenser ikke blir brutt.
5. Heller ikke bruk tekst som blir returnert ukritisk. Noe tekst gir tydelige
   ChatGPT-mønster og det kan fremstår uprofesjonelt dersom det blir brukt i
   offisielle tekster.
6. Aldri ta det ChatGPT og andre LLMs som en fasit. Det er språkmodeller som
   ikke vet hva den skriver. Det gir ofte gode resultater, men det er også like
   ofte misvisende.
7. AI modeller har ofte innebygget forutinntatthet. Alt som returneres må tenkes
   på kritisk for å vekte mot innebygget bias mot enkelte kulturer, kjønn etc.

### Gjør

Dersom du bruker AI-verktøy aktiv til arbeid er det noe du kan utgiftsføre.
Dette gjelder som alle verktøy i Variant. Se på mulighet om det er
hensiktsmessig at kunder har eierskap for verktøyet for lettere å ha det likt
for alle i teamet og for å bygge kultur i det.

1. Dersom gratis Copilot brukes må du slå av innsending av input og blokkere
   lisensiert innhold. Vurder Github for Business for kunde og team.
2. Test ut bruk av Tabnine og andre lokale verktøy og se om det fungerer bra for
   ditt prosjekt.

## Fremtiden for kunder

Variant skal utforske nye muligheter å bruke AI med kunder som gjøres på en
sikker måte. For sikker måte betyr det at vi:

1. Ikke lekker kundeinformasjon eller sensitiv data.
2. Ivaretar kunders åndsverk.
3. Ikke bryter med kunders policy for lisenser (eksempelvis inkluderer
   «copyleft» lisensiert innhold uten å vite om det.)
4. Som ikke er feilaktig eller unyansert.

Ved å gå i front på ikke bare bruk av AI, men bruk av AI på en korrekt og trygg
måte vil vi kunne få kompetanse og produktivitetsfordeler og jobbe med en ny
hverdag hvor AI blir en integrert del av arbeidshverdagen og kundeinvolvering.
