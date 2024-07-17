"use server";

import { api } from "@/lib/service/network";

export async function getMovie(id: string) {
  try {
    const res = await api.get(`/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
