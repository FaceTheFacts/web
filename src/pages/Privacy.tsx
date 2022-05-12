import { IonApp, IonContent } from '@ionic/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeFooter from '../components/HomeFooter';
import HomeHeader from '../components/HomeHeader';
import './Privacy.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Privacy: React.FC = () => (
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
				<br />
				<h1 className="privacy-header">Datenschutz Website</h1>
				<h2>1. Datenschutz auf einen Blick </h2>
				<h3>Allgemeine Hinweise</h3>
				Der Schutz Ihrer Daten liegt uns besonders am Herzen. Darum geben wir alles, um ihre
				persönlichen Daten bestmöglich zu schützen. Die folgenden Hinweise geben Ihnen
				deshalb zunächst einmal einen einfachen Überblick darüber, was mit Ihren
				personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Dabei sollte
				zunächst einmal erklärt werden, was unter personenbezogenen Daten überhaupt zu
				verstehen ist. Personenbezogene Daten sind gemäß Artikel 4 Nr. 1 der DSGVO alle
				Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
				Person beziehen, also z.B. ihr Name, Ihre Anschrift oder Ihre Email-Adresse.
				Ausführlichere Informationen zum Thema Datenschutz können Sie unserer unter diesem
				Text aufgeführten Datenschutzerklärung entnehmen. Datenerfassung auf unserer Website
				Wer ist verantwortlich für die Datenerfassung auf dieser Website? Die
				Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
				Kontaktdaten können Sie dem Impressum dieser Website oder der nachfolgenden
				Datenschutzerklärung entnehmen.
				<br />
				<h4>Wie erfassen wir Ihre Daten?</h4>
				<br />
				Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
				kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere
				Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.
				Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
				Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald
				Sie unsere Website betreten.
				<br />
				<h4>Wofür nutzen wir Ihre Daten?</h4>
				<br />
				Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
				gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
				werden.
				<br />
				<h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
				<br />
				Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und
				Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
				ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
				Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
				unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen
				ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das
				Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
				personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der
				Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
				<h2>2. Verantwortlicher</h2>
				Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
				<br />
				<br />
				z.Hd. Victor Bellu
				<br />
				Bellu, Köditz und Krümmel GbR
				<br />
				Zähringerstraße 17
				<br />
				10707 Berlin
				<br />
				<h5>Kontakt</h5>
				Telefon: +01729789410
				<br />
				E-Mail: info@facethefacts.app
				<br />
				<br />
				Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
				gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
				personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
				<h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
				Wir als Betreiber dieser Seite nehmen den Schutz Ihrer persönlichen Daten sehr
				ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
				gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie
				diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
				Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden
				können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und
				wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
				Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
				Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
				der Daten vor dem Zugriff durch Dritte ist nicht möglich. Rechtsgrundlage der
				Datenverarbeitung Um Ihnen unsere Internetseite und die damit verbundenen
				Dienstleistungen anbieten zu können, müssen wir personenbezogenen Daten verarbeiten.
				Diese Verarbeitung basiert auf folgender Rechtsgrundlage: Art. 6 Abs. 1 lit. a
				DS-GVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen eine
				Einwilligung für den spezifischen Verwendungszweck eingeholt wird. Handelt es sich
				bei den zu verarbeitenden Daten um personenbezogene Daten die für die Erfüllung
				eines Vertrags erforderlich sind, bei dem Sie selbst Vertragspartei sind, beruht die
				Verarbeitung dieser Daten auf Art. 6 Abs. 1 lit. b DS-GVO. Dies ist z.B. bei der
				Lieferung von Waren oder der Erbringung sonstiger Leistungen notwendig. Gleiches
				gilt für Verarbeitungsvorgänge die für die Durchführung vorvertraglicher Maßnahmen
				benötigt werden, z.B. bei Produktanfragen. Die Verarbeitung von personenbezogenen
				Daten kann auch aufgrund rechtlicher Verpflichtungen erforderlich werden, z.B. zur
				Erfüllung von steuerlichen Pflichten. Diese Art der Datenverarbeitung beruht auf
				Art. 6 Abs. 1 lit. c DS-GVO In Ausnahmefällen kann die Verarbeitung von
				personenbezogenen Daten notwendig werden, um lebenswichtige Interessen der
				betroffenen Person oder anderer natürlicher Personen zu wahren. Dies ist z.B. bei
				Unfällen im Betrieb notwendig, wenn medizinische Hilfe hinzugezogen wird. Die
				rechtliche Grundlage ergibt sich aus Art. 6 Abs. 1 lit. d DS-GVO Personenbezogene
				Daten können auch auf Basis einer Interessenabwägung verarbeitet werden. Dies ist
				gemäß Art. 6 Abs. 1 lit. f DS-GVO dann möglich, wenn ein berechtigtes Interesse
				seitens unseres Unternehmens oder eines Dritten besteht und die Datenverarbeitung
				dafür zwingend erforderlich ist. Dabei darf das berechtigte Interesse die
				Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen. Widerruf Ihrer
				Einwilligung zur Datenverarbeitung Viele Datenverarbeitungsvorgänge sind nur mit
				Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte
				Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
				an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt
				vom Widerruf unberührt. Widerspruchsrecht gegen die Datenerhebung in besonderen
				Fällen sowie gegen Direktwerbung (Art. 21 DSGVO) Wenn die Datenverarbeitung auf
				Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das
				Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die
				Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch
				für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage,
				auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn
				Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht
				mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die
				Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder
				die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von
				Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre
				personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das
				Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender
				personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für
				das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
				widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum
				Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
				Beschwerderecht bei der zuständigen Aufsichtsbehörde Im Falle von Verstößen gegen
				die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
				insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
				Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
				besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
				Rechtsbehelfe. Recht auf Datenübertragbarkeit Sie haben das Recht, Daten, die wir
				auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
				verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren
				Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen
				anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar
				ist. SSL- bzw. TLS-Verschlüsselung Diese Seite nutzt aus Sicherheitsgründen und zum
				Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
				Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw.
				TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
				Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem
				Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung
				aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten
				mitgelesen werden. Auskunft, Sperrung, Löschung und Berichtigung ie haben im Rahmen
				der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
				Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
				Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
				Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
				personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen
				Adresse an uns wenden. Recht auf Einschränkung der Verarbeitung. Sie haben das
				Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
				verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen
				Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
				folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
				personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu
				überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
				Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn die Verarbeitung Ihrer
				personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der
				Löschung die Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre
				personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
				Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das
				Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen
				Daten zu verlangen. Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
				haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
				Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
				Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie
				die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
				Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur
				Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
				Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
				wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
				verarbeitet werden. Dauer der Speicherung von personenbezogenen Daten Die bei uns
				gespeicherten Daten werden gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr
				erforderlich sind. Ein Erfordernis kann insbesondere dann bestehen, wenn die Daten
				noch benötigt werden, um vertragliche Leistungen zu erfüllen, Gewährleistungs- und
				ggf. Garantiansprüche zu xprüfen und gewähren oder abwehren zu können. Im Falle von
				gesetzlichen Aufbewahrungspflichten kommt eine Löschung erst nach Ablauf der
				jeweiligen Aufbewahrungsfrist in Betracht. Nach gesetzlichen Vorgaben erfolgt die
				Aufbewahrung von Daten für 6 Jahre gemäß §257 Abs. 1 HGB (Handelsbücher, Inventare,
				Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe, Buchungsbelege, etc.) sowie für
				10 Jahre gemäß §147 Abs. 1 AO (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege,
				Handels- und Geschäftsbriefe, für Besteuerung relevante Unterlagen, etc.).
				Widerspruch gegen Werbe-E-Mails Der Nutzung von im Rahmen der Impressumspflicht
				veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
				Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
				Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
				Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor. Weitergabe von Daten
				an Dritte Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn: Sie der
				Weitergabe der Daten ausdrücklich zugestimmt haben (vgl. Art. 6 Abs. 1 lit. a
				DS-GVO) Die Weitergabe der Daten für die Abwicklung von Vertragsverhältnissen
				erforderlich ist (vgl. Art. 6 Abs. 1 lit. b DS-GVO) Die Weitergabe der Daten für
				gesetzliche Verpflichtungen notwendig ist (vgl. Art. 6 Abs. 1 lit. c DS-GVO)
				Lebenswichtige Interessen von Ihnen oder anderen Personen geschützt werden müssen.
				(vgl. Art. 6 Abs. 1 lit. d DS-GVO) Lebenswichtige Interessen von Ihnen oder anderen
				Personen geschützt werden müssen. (vgl. Art. 6 Abs. 1 lit. d DS-GVO) Zudem setzen
				wir ggf. Dienstleister ein, die für den Betrieb der Internetseite oder weitere
				Dienstleistungen zuständig sind. Hier kann es vorkommen, dass diese Dienstleister
				Kenntnis von Ihren personenbezogenen Daten erhalten. Wir treffen jedoch alle
				datenschutzrechtlich erforderlichen Maßnahmen um die sichere und zuverlässige
				Verarbeitung Ihrer Daten zu gewährleisten.
				<h2>4. Datenerfassung auf unserer Website</h2>
				Wir benutzen keine Analyse-Tools oder Tools von Drittanbietern. Server-Log-Dateien
				Der Provider der Seiten erhebt und speichert automatisch Informationen in so
				genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
				sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer, URL,
				Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse. Eine
				Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
				Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
				Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien
				Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files
				erfasst werden.
				<h2>5. Änderungen der Datenschutzbestimmungen</h2>
				Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2022. Um den
				Schutz Ihrer Daten auch zukünftig bestmöglich gewährleisten zu können behalten wir
				uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
				rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
				Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
				erneuten Besuch gilt dann die neue Datenschutzerklärung. Wir empfehlen Ihnen daher,
				unsere Informationen und Hinweise zur Datenverarbeitung regelmäßig erneut zur
				Kenntnis zu nehmen.
				<br />
				<br />
				<NavLink to={'/app/privacy'} className="privacy-link">
					zur App Datenschutzerklärung
				</NavLink>
			</div>
			<HomeFooter />
		</IonContent>
	</IonApp>
);

export default Privacy;
