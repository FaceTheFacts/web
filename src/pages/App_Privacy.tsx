import { IonApp, IonContent } from '@ionic/react';
import React from 'react';
import HomeFooter from '../components/HomeFooter';
import HomeHeader from '../components/HomeHeader';
import './Privacy.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const AppPrivacy: React.FC = () => (
	<IonApp>
		<HomeHeader />
		<IonContent>
			<div className="privacy">
				<h1 className="privacy-header">Datenschutz App</h1>
				<h2>1. Information über die Erhebung personenbezogener Daten</h2>
				(1) Wir stellen Ihnen eine mobile App zur Verfügung, die Sie auf Ihr mobiles
				Endgerät herunterladen können. Im Folgenden informieren wir über die Erhebung
				personenbezogener Daten bei Nutzung unserer mobilen App. Personenbezogene Daten sind
				alle Daten, die auf Sie persönlich beziehbar sind, z. B. Name, Adresse,
				E-Mail-Adressen, Nutzerverhalten.
				<br />
				<br />
				(2) Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung (DS-GVO) ist
				die Bellu, Köditz, Krümmel GbR, Zähringer Straße 17, 10707 Berlin, vertreten durch
				den Geschäftsführer Victor Bellu, info@facethefacts.app (siehe Impressum). Unseren
				Datenschutzbeauftragten erreichen Sie unter victor.bellu@code.berlin oder unter
				unserer Postadresse mit dem Zusatz „der Datenschutzbeauftragte“.
				<br />
				<br />
				(3) Bei Ihrer Kontaktaufnahme mit uns per E-Mail wird Ihre E-Mail-Adresse und, falls
				Sie von Ihnen angegeben werden, Ihr Name und Ihre Telefonnummer von uns gespeichert,
				um Ihre Fragen zu beantworten. Die in diesem Zusammenhang anfallenden Daten löschen
				wir, nachdem die Speicherung nicht mehr erforderlich ist, oder – im Falle von
				gesetzlichen Aufbewahrungspflichten – schränken die Verarbeitung ein.
				<br />
				<br />
				(4) Falls wir für einzelne Funktionen unseres Angebots auf beauftragte Dienstleister
				zurückgreifen oder Ihre Daten für werbliche Zwecke nutzen möchten, werden wir Sie
				untenstehend im Detail über die jeweiligen Vorgänge informieren. Dabei nennen wir
				auch die festgelegten Kriterien der Speicherdauer.
				<br />
				<br />
				<h2>2. Ihre Rechte</h2>
				Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden
				personenbezogenen Daten:
				<br />
				<br />
				• Recht auf Auskunft,
				<br />
				• Recht auf Widerruf,
				<br />
				• Recht auf Berichtigung oder Löschung,
				<br />
				• Recht auf Einschränkung der Verarbeitung,
				<br />
				• Recht auf Widerspruch gegen die Verarbeitung,
				<br />
				• Beschwerderecht,
				<br />
				• Recht auf Datenübertragbarkeit.
				<br />
				• Sie haben zudem das Recht, sich bei einer Datenschutz- Aufsichtsbehörde über die
				Verarbeitung Ihrer personenbezogenen Daten in unserem Unternehmen zu beschweren.
				<br />
				<br />
				<h2>3. Erhebung personenbezogener Daten bei Nutzung unserer mobilen App</h2>
				Als non-profit open-source Projekt ist generell unsere Prämisse so wenig Daten wie
				möglich zu erheben. Leider müssen wir zum Teil für Hosting und Analyse fremde
				Dienste benutzen, da sonst dieses Projekt nicht möglich ist. Im Folgenden eine
				Übersicht welche Daten wir erheben:
				<br />
				<br />
				(1) Bei Herunterladen der mobilen App werden die erforderlichen Informationen an den
				App Store übertragen. Auf diese Datenerhebung haben wir keinen Einfluss und sind
				nicht dafür verantwortlich. Wir verarbeiten die Daten nur, soweit es für das
				Herunterladen der mobilen App auf Ihr mobiles Endgerät notwendig ist.
				<br />
				<br />
				(2) Bei Nutzung der mobilen App erheben wir die nachfolgend beschriebenen
				personenbezogenen Daten, um die komfortable Nutzung der Funktionen zu ermöglichen.
				Wenn Sie unsere mobile App nutzen möchten, erheben wir die folgenden Daten, die für
				uns technisch erforderlich sind, um Ihnen die Funktionen unserer mobilen App
				anzubieten und die Stabilität und Sicherheit zu gewährleisten (Rechtsgrundlage ist
				Art. 6 Abs. 1 S. 1 lit. f DS-GVO):
				<br />
				<br />
				• IP-Adresse
				<br />
				• Datum und Uhrzeit der Anfrage
				<br />
				• Zeitzonendifferenz zur Greenwich Mean Time (GMT)
				<br />
				• Inhalt der Anforderung (konkrete Seite)
				<br />
				• Zugriffsstatus/HTTP-Statuscode
				<br />
				• jeweils übertragene Datenmenge
				<br />
				• Betriebssystem und dessen Oberfläche
				<br />
				• Zugriff auf die Handykamera
				<br />• Wir verwenden die open-source Software Sentry, einen Analysedienst der
				FUNCTIONAL SOFTWARE, INC., 132 Hawthorne Street San Francisco, CA 94107 United
				States, um die Nutzung unserer Software zu verbessern und Bugs und Crashes zu
				monitoren. Die Benutzung erfolgt auf Grund unseres berechtigten Interesses nach Art.
				6 Abs. 1 S. 1 lit. f. DSGVO. Sentry speichert Daten in Form von generischen IDs samt
				Zeitstempel und zahlreichen anderen fünf Informationen, wie User ID, Plattform,
				Gerätetyp, App-Version, Geo-Informationen, evtl. den Mobilfunkanbieter, die
				Gerätesprache oder Angaben zum Browser. Diese Daten stellen für FUNCTIONAL SOFTWARE,
				INC.. keine persönlich identifizierbaren Informationen dar. Darüber hinaus sind
				FUNCTIONAL SOFTWARE, INC auch keine weiteren Daten bekannt, die Sentry Ihre
				Identifizierung ermöglichen könnten. FUNCTIONAL SOFTWARE, INC. ist unter dem
				US-EUDatenschutzabkommen „Privacy Shield“ zertifiziert. Weitere Informationen können
				Sie in der Datenschutzerklärung von Sentry finden:{' '}
				<a href="https://docs.sentry.io/product/security/mobile-privacy/">
					https://docs.sentry.io/product/security/mobile-privacy/
				</a>
				<br />
				<br />
				(3) Zusätzlich zu den zuvor genannten Daten werden bei Öffnen des Browsers innerhalb
				der App von der jeweiligen Website möglicherweise Cookies erhoben. Darauf haben wir
				keinen Einfluss und erheben auch keine Informationen darüber. Bei Cookies handelt es
				sich um kleine Textdateien, die im Gerätespeicher Ihres mobilen Endgerätes abgelegt
				und der von Ihnen verwendeten mobilen App zugeordnet gespeichert werden. Durch
				Cookies können der Stelle, die den Cookie setzt (hier: uns), bestimmte Informationen
				zufließen. Cookies können keine Programme ausführen oder Viren auf Ihr mobiles
				Endgerät übertragen. Sie dienen dazu, mobile Apps insgesamt nutzerfreundlicher und
				effektiver zu machen.
				<br />
				<br />
				(4) Diese App verwendet Dienste von Amazon Web Services (AWS) Inc., mit Sitz in 410
				Terry Avenue North Seattle WA 98109, USA. AWS unterstützt unsere App durch
				cloudbasierte Auslieferung von Inhalten. Dabei können auch Informationen wie Ihre
				(anonymisierte) IP und die weiteren unter (2) genannten Punkte übertragen werden.
				Die Server selber stehen in Frankfurt. Weitere Informationen zu den AWS
				Datenschutzmaßnahmen finden Sie unter:{' '}
				<a href="https://aws.amazon.com/de/compliance/eu-data-protection/">
					https://aws.amazon.com/de/compliance/eu-data-protection/
				</a>
				<br />
				<br />
				(5) Die restlichen Daten, wie zum Beispiel welchen Politiker Sie in der App folgen
				werden lokal auf ihrem Gerät gespeichert. Wir haben darauf keinen Zugriff und
				installieren Sie Face the Facts auf einem neuen Gerät, sind diese Daten gelöscht.
				<br />
				<br />
				<h2>4. Änderung dieser Datenschutzinformation</h2>
				Unser Angebot wird stetig weiterentwickelt, um unsere Services und unsere
				Funktionalitäten weiter zu verbessern. Solche Änderungen können sich auch auf die
				Nutzung Ihrer personenbezogenen Daten auswirken. Wir werden diese
				Datenschutzinformation daher von Zeit zu Zeit anpassen. Die jeweils aktuelle Version
				ist auf unserer Website unter der Rubrik „Datenschutz“ abrufbar. Bitte informieren
				Sie sich auf diesem Wege regelmäßig über den aktuellen Stand der
				Datenschutzinformation.
				<br />
			</div>
			<HomeFooter />
		</IonContent>
	</IonApp>
);

export default AppPrivacy;
