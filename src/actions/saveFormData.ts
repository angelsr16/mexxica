import { FormData } from "@/app/components/Contacto";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function saveContactForm(formData: FormData) {
  const docRef = await addDoc(collection(db, "mensajes"), {
    ...formData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
