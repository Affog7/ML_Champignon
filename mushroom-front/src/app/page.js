// Import necessary modules
import styles from "./page.module.sass";
import { getMushrooms, getTest } from "../utils/fetchData";
import {FormatDetectionMeta} from "next/dist/lib/metadata/generate/basic";
import FormPrediction from "@/components/FormPrediction";
// Define your server component
export default async function Home() {
    // Define an async function to fetch data

    // Await the data fetching function and use its result
    let mushrooms = await getMushrooms();

    console.log('[debug]', mushrooms)

    // Render your component using the fetched data
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Mushroom</h1>
            {/* Render the fetched data here */}

            <FormPrediction />
        </main>
    );
}
