import { IonApp, IonContent } from '@ionic/react';
import React from 'react';
import HomeFooter from '../components/HomeFooter';
import HomeHeader from '../components/HomeHeader';
import './Privacy.css';

/* Define the React component (FC stands for Functional Components, as opposed to class-based components) */
const Privacy: React.FC = () => {
	/* This is returned when using this component */

	return (
		<IonApp>
			<HomeHeader />
			<IonContent>
				<div className="privacy">
					<h1 className="privacy-header">Datenschutz</h1>
					<h2>1. Datenschutz auf einen Blick </h2>
<h3>Allgemeine Hinweise</h3>
Der Schutz Ihrer Daten liegt uns besonders am Herzen. Darum geben wir alles, um ihre persönlichen Daten bestmöglich zu schützen. Die folgenden Hinweise geben Ihnen deshalb zunächst einmal einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Dabei sollte zunächst einmal erklärt werden, was unter personenbezogenen Daten überhaupt zu verstehen ist. Personenbezogene Daten sind gemäß Artikel 4 Nr. 1 der DSGVO alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, also z.B. ihr Name, Ihre Anschrift oder Ihre Email-Adresse. Ausführlichere Informationen zum Thema Datenschutz können Sie unserer unter diesem Text aufgeführten Datenschutzerklärung entnehmen.
Datenerfassung auf unserer Website
Wer ist verantwortlich für die Datenerfassung auf dieser Website?
Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website oder der nachfolgenden Datenschutzerklärung entnehmen.
<br />
<h4>Wie erfassen wir Ihre Daten?</h4><br />
Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
<br />
<h4>Wofür nutzen wir Ihre Daten?</h4><br />
Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
<br />
<h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4><br />
Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
<h2>2. Verantwortlicher</h2>
Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />

<br />z.Hd. Victor Bellu
<br />Bellu, Köditz und Krümmel GbR 
<br />Zähringerstraße 17
<br />10707 Berlin
<br /><h5>Kontakt</h5>
Telefon: +01729789410
<br />E-Mail: info@facethefacts.app
<br />
<br />
Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
<h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
Datenschutz
Wir als Betreiber dieser Seite nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.

Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.

Rechtsgrundlage der Datenverarbeitung
Um Ihnen unsere Internetseite und die damit verbundenen Dienstleistungen anbieten zu können, müssen wir personenbezogenen Daten verarbeiten. Diese Verarbeitung basiert auf folgender Rechtsgrundlage: Art. 6 Abs. 1 lit. a DS-GVO dient als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen eine Einwilligung für den spezifischen Verwendungszweck eingeholt wird.

Handelt es sich bei den zu verarbeitenden Daten um personenbezogene Daten die für die Erfüllung eines Vertrags erforderlich sind, bei dem Sie selbst Vertragspartei sind, beruht die Verarbeitung dieser Daten auf Art. 6 Abs. 1 lit. b DS-GVO. Dies ist z.B. bei der Lieferung von Waren oder der Erbringung sonstiger Leistungen notwendig. Gleiches gilt für Verarbeitungsvorgänge die für die Durchführung vorvertraglicher Maßnahmen benötigt werden, z.B. bei Produktanfragen. Die Verarbeitung von personenbezogenen Daten kann auch aufgrund rechtlicher Verpflichtungen erforderlich werden, z.B. zur Erfüllung von steuerlichen Pflichten. Diese Art der Datenverarbeitung beruht auf Art. 6 Abs. 1 lit. c DS-GVO In Ausnahmefällen kann die Verarbeitung von personenbezogenen Daten notwendig werden, um lebenswichtige Interessen der betroffenen Person oder anderer natürlicher Personen zu wahren. Dies ist z.B. bei Unfällen im Betrieb notwendig, wenn medizinische Hilfe hinzugezogen wird. Die rechtliche Grundlage ergibt sich aus Art. 6 Abs. 1 lit. d DS-GVO Personenbezogene Daten können auch auf Basis einer Interessenabwägung verarbeitet werden. Dies ist gemäß Art. 6 Abs. 1 lit. f DS-GVO dann möglich, wenn ein berechtigtes Interesse seitens unseres Unternehmens oder eines Dritten besteht und die Datenverarbeitung dafür zwingend erforderlich ist. Dabei darf das berechtigte Interesse die Grundrechte und Grundfreiheiten des Betroffenen nicht überwiegen.
Widerruf Ihrer Einwilligung zur Datenverarbeitung
Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.

Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
Beschwerderecht bei der zuständigen Aufsichtsbehörde
Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe. 


Recht auf Datenübertragbarkeit 

Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
SSL- bzw. TLS-Verschlüsselung
Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
Auskunft, Sperrung, Löschung und Berichtigung
ie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Recht auf Einschränkung der Verarbeitung. 

Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen: 

Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.


Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
Dauer der Speicherung von personenbezogenen Daten
Die bei uns gespeicherten Daten werden gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind. Ein Erfordernis kann insbesondere dann bestehen, wenn die Daten noch benötigt werden, um vertragliche Leistungen zu erfüllen, Gewährleistungs- und ggf. Garantiansprüche zu xprüfen und gewähren oder abwehren zu können. Im Falle von gesetzlichen Aufbewahrungspflichten kommt eine Löschung erst nach Ablauf der jeweiligen Aufbewahrungsfrist in Betracht. Nach gesetzlichen Vorgaben erfolgt die Aufbewahrung von Daten für 6 Jahre gemäß §257 Abs. 1 HGB (Handelsbücher, Inventare, Eröffnungsbilanzen, Jahresabschlüsse, Handelsbriefe, Buchungsbelege, etc.) sowie für 10 Jahre gemäß §147 Abs. 1 AO (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handels- und Geschäftsbriefe, für Besteuerung relevante Unterlagen, etc.).
Widerspruch gegen Werbe-E-Mails
Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
Weitergabe von Daten an Dritte
Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn: 

Sie der Weitergabe der Daten ausdrücklich zugestimmt haben (vgl. Art. 6 Abs. 1 lit. a DS-GVO)
Die Weitergabe der Daten für die Abwicklung von Vertragsverhältnissen erforderlich ist (vgl. Art. 6 Abs. 1 lit. b DS-GVO)
Die Weitergabe der Daten für gesetzliche Verpflichtungen notwendig ist (vgl. Art. 6 Abs. 1 lit. c DS-GVO)
Lebenswichtige Interessen von Ihnen oder anderen Personen geschützt werden müssen. (vgl. Art. 6 Abs. 1 lit. d DS-GVO)
Lebenswichtige Interessen von Ihnen oder anderen Personen geschützt werden müssen. (vgl. Art. 6 Abs. 1 lit. d DS-GVO)


Zudem setzen wir ggf. Dienstleister ein, die für den Betrieb der Internetseite oder weitere Dienstleistungen zuständig sind. Hier kann es vorkommen, dass diese Dienstleister Kenntnis von Ihren personenbezogenen Daten erhalten. Wir treffen jedoch alle datenschutzrechtlich erforderlichen Maßnahmen um die sichere und zuverlässige Verarbeitung Ihrer Daten zu gewährleisten.

<h2>4. Datenerfassung auf unserer Website</h2>

Wir benutzen keine Analyse-Tools oder Tools von Drittanbietern.
Server-Log-Dateien
Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: 

Browsertyp und Browserversion
verwendetes Betriebssystem
Referrer URL
Hostname des zugreifenden Rechners
Uhrzeit der Serveranfrage
IP-Adresse

Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
Webanalyse
Newsletter
Auf unserer Internetseite besteht die Möglichkeit einen Newsletter zu abonnieren. Welche personenbezogenen Daten bei der Bestellung des Newsletters an den für die Verarbeitung Verantwortlichen übermittelt werden, ergibt sich aus der hierzu verwendeten Eingabemaske. 

Der Newsletter kann grundsätzlich nur dann empfangen werden, wenn (1) die betroffene Person über eine gültige E-Mail-Adresse verfügt und (2) die betroffene Person sich für den Newsletterversand registriert. Zudem wird erstmalig für den Newsletterversand eingetragene E-Mail-Adresse aus rechtlichen Gründen eine Bestätigungsmail im Double-Opt-In-Verfahren versendet. Diese Bestätigungsmail dient der Überprüfung, ob der Inhaber der E-Mail-Adresse als betroffene Person den Empfang des Newsletters autorisiert hat. 

Bei der Anmeldung zum Newsletter speichern wir ferner die vom Internet-Service-Provider (ISP) vergebene IP-Adresse des von der betroffenen Person zum Zeitpunkt der Anmeldung verwendeten Computersystems sowie das Datum und die Uhrzeit der Anmeldung. Die Erhebung dieser Daten ist erforderlich, um den(möglichen) Missbrauch der E-Mail-Adresse einer betroffenen Person zu einem späteren Zeitpunkt nachvollziehen zu können und dient deshalb der rechtlichen Absicherung des für die Verarbeitung Verantwortlichen. 

Die im Rahmen einer Anmeldung zum Newsletter erhobenen personenbezogenen Daten werden ausschließlich zum Versand unseres Newsletters verwendet. Ferner könnten Abonnenten des Newsletters per E-Mail informiert werden, sofern dies für den Betrieb des Newsletter-Dienstes oder eine diesbezügliche Registrierung erforderlich ist, wie dies im Falle von Änderungen am Newsletterangebot oder bei der Veränderung der technischen Gegebenheiten der Fall sein könnte. Der Versand der Newsletter erfolgt mittels des Versanddienstleister „MailChimp“, Rocket Science Group, LLC, 675 Ponce De Leon Ave NE #5000, Atlanta, GA 30308, USA. Die Datenschutzbestimmungen des Versanddienstleisters können Sie hier einsehen: <a href="https://mailchimp.com/legal/privacy/">https://mailchimp.com/legal/privacy/</a>. The Rocket Science Group LLC d/b/a MailChimp ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäisches Datenschutzniveau einzuhalten (<a href="https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active">https://www.privacyshield.gov/participant?id=a2zt0000000TO6hAAG&status=Active</a>). Der Versanddienstleister wird auf Grundlage unserer berechtigten Interessen gem. Art. 6 Abs. 1 lit. f DSGVO und eines Auftragsverarbeitungsvertrages gem. Art. 28 Abs. 3 S. 1 DSGVO eingesetzt. 

Der Versanddienstleister kann die Daten der Empfänger in pseudonymer Form, d.h. ohne Zuordnung zu einem Nutzer, zur Optimierung oder Verbesserung der eigenen Services nutzen, z.B. zur technischen Optimierung des Versandes und der Darstellung der Newsletter oder für statistische Zwecke verwenden. Der Versanddienstleister nutzt die Daten unserer Newsletterempfänger jedoch nicht, um diese selbst anzuschreiben oder um die Daten an Dritte weiterzugeben. Das Abonnement unseres Newsletters kann durch die betroffene Person jederzeit gekündigt werden. Die Einwilligung in die Speicherung personenbezogener Daten, die die betroffene Person uns für den Newsletterversand erteilt hat, kann jederzeit widerrufen werden. Zum Zwecke des Widerrufs der Einwilligung findet sich in jedem Newsletter ein entsprechender Link. Ferner besteht die Möglichkeit, sich jederzeit auch direkt auf der Internetseite des für die Verarbeitung Verantwortlichen vom Newsletterversand abzumelden oder dies dem für die Verarbeitung Verantwortlichen auf andere Weise mitzuteilen.

<h2>5. Änderungen der Datenschutzbestimmungen</h2>
Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2021. Um den Schutz Ihrer Daten auch zukünftig bestmöglich gewährleisten zu können behalten wir uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. Wir empfehlen Ihnen daher, unsere Informationen und Hinweise zur Datenverarbeitung regelmäßig erneut zur Kenntnis zu nehmen.
				</div>
				<HomeFooter />
			</IonContent>
		</IonApp>
	);
};

export default Privacy;
