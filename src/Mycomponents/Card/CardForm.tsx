import React, { useEffect, useState } from "react";
import { getGender, getEvent, getReshenie } from "../../api/api";
import { useParams } from "react-router-dom";

type Attributes = {
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Meta = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

interface Data {
  id: number;
  attributes: Attributes;
}

interface ResponseData {
  data: Data[];
  meta: Meta;
}

const CardForm = () => {
  const [gender, setGender] = useState<ResponseData | null>(null);
  const [event, setEvent] = useState<ResponseData | null>(null);
  const [reshenie, setReshenie] = useState<ResponseData | null>(null);
  

  const fetchGender = async () => {
    try {
      const response = await getGender();
      setGender(response);
      console.log(gender);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGender();
  }, []);



  const fetchEvent = async () => {
    try {
      const response = await getEvent();
      setEvent(response);
      console.log(event);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchReshenie = async () => {
    try {
      const response = await getReshenie();
      setReshenie(response);
      console.log(reshenie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReshenie();
  }, []);


  

  return (
    <>
      
    </>
  );
};

export default CardForm;
