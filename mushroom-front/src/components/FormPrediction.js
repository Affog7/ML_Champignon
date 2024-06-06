'use client'
import styles from './FormPrediction.module.sass'
import { getMushrooms} from "@/utils/fetchData"
import {useState} from "react";

export default function FormPrediction() {
    const [capDiameter, setCapDiameter] = useState('')
    const [capShape, setCapShape] = useState('')
    const [gillAttachment, setGillAttachment] = useState('')
    const [gillColor, setGillColor] = useState('')
    const [stemHeight, setStemHeight] = useState('')
    const [stemWidth, setStemWidth] = useState('')
    const [stemColor, setStemColor] = useState('')
    const [season, setSeason] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const mushroomData = {
            'cap-diameter': capDiameter,
            'cap-shape': capShape,
            'gill-attachment': gillAttachment,
            'gill-color': gillColor,
            'stem-height': stemHeight,
            'stem-width': stemWidth,
            'stem-color': stemColor,
            'season': season
        };
        console.log('[debug] 1', mushroomData )
        const mushrooms = await getMushrooms(mushroomData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form__mushroom} id="mushroom__form__ia__hexagone">
            <Input label="Cap Shape" type="text" value={capShape} onChange={e => setCapShape(e.target.value)}/>
            <Input label="CapDiameter" type="text" value={capDiameter} onChange={e => setCapDiameter(e.target.value)}/>
            <Input label="Gill Attachment" type="text" value={gillAttachment} onChange={e => setGillAttachment(e.target.value)}/>
            <Input label="Gill Color" type="text" value={gillColor} onChange={e => setGillColor(e.target.value)}/>
            <Input label="Stem Height" type="text" value={stemHeight} onChange={e => setStemHeight(e.target.value)}/>
            <Input label="Stem Width" type="text" value={stemWidth} onChange={e => setStemWidth(e.target.value)}/>
            <Input label="Stem Color" type="text" value={stemColor} onChange={e => setStemColor(e.target.value)}/>
            <Input label="Season" type="text" value={season} onChange={e => setSeason(e.target.value)}/>
            <div className={styles.form__mushroom__submit__container}>
                <button type="submit" className={styles.form__mushroom__submit}>Predict</button>
            </div>
        </form>
    );
}

function Input ({label = 'labelUnknown', ...props}){
    return (
        <div className={styles.form__mushroom__field__container}>
            <span htmlFor="capShape" className={styles.form__mushroom__field__label}>{label} :</span>
            <input  placeholder={label} className={styles.form__mushroom__field} {...props}/>
        </div>
    )
}