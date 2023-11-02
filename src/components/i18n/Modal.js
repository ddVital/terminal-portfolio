import { useState } from "react";
import { closeIcon } from "../Icons";
import Translator from "./Translator";
import Checkbox from "../Checkbox";

const Modal = ({ handleChangeLanguage, selectedLanguage, onClose}) => {
	const [modalSelectedLang, setModalSelectedLang] = useState(selectedLanguage);
	const [selectedLang, setSelectedLang] = useState(modalSelectedLang);

	const handleChangeLang = () => {
		handleChangeLanguage(modalSelectedLang);
		onClose();
	}

	return (
		<div className={`overlay`} onClick={() => onClose()}>
			<dialog className="modal">
				<header className="modal__header">
					<h3>
						<Translator path="home.changeLang" />
					</h3>
					<button className="modal__header-close" onClick={() => onClose()}>
						{closeIcon()}
					</button>
				</header>
				<div className="modal__content" onClick={e => e.stopPropagation()}>
					<button
						className={`${modalSelectedLang === 'pt-BR' ? "modal__content-lang--active" : undefined} modal__content-lang`}
        		// onClick={() => handleChangeLanguage('pt-BR')} // Troca o idioma para en-US
        		onClick={() => setModalSelectedLang("pt-BR")} // Troca o idioma para en-US
					>
						<Checkbox
						label={"pt"}
						selectedLang={selectedLang.substring(0, 2)}
						setSelectedLang={setSelectedLang}
						/>
					</button>
					<button
						className={`${modalSelectedLang === 'en-US' ? "modal__content-lang--active" : undefined} modal__content-lang`}
        		// onClick={() => handleChangeLanguage('en-US')} // Troca o idioma para en-US
        		onClick={() => setModalSelectedLang('en-US')} // Troca o idioma para en-US
					>
						<Checkbox
						label={"en"}
						selectedLang={selectedLang.substring(0, 2)}
						setSelectedLang={setSelectedLang}
						/>
					</button>
				</div>
				<footer className="modal__footer">
					<button className="btn btn--outline" onClick={() => onClose()}>
						<Translator path="home.cancel" />
          		</button>
					<button className="btn btn--primary" onClick={() => handleChangeLang()}>
						<Translator path="home.changeLang" />
					</button>
				</footer>
			</dialog>
		</div>
	);
}

export default Modal;