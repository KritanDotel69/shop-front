import React from 'react'
import { useParams } from 'react-router';
import { useGetProductsByIdQuery } from '../../features/productApi';
import EditForm from './EditForm';
const EditPage = () => {

  const { id } = useParams();
  const { data, error, isLoading, isError } = useGetProductsByIdQuery(id);

  if (isLoading) {

  }

  if (isError) {

  }

  return (
    <>
      {data && <EditForm product={data} />}
    </>
  )
}

export default EditPage