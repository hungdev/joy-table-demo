import React from 'react'
import RDTable from './components/table/table'

export default function App() {

  const sample_data = Array(100).fill('').map((e, i) => ({
    id: i,
    name: "Zainab Arabi",
    email: "zarabi@gmail.com",
    date: Date.now(),
  }))

  const config = {
    actions: {
      bulk: ['Export', 'Delete'],
      single: ['View', 'Edit', 'Delete'],
    },
    fields: [
      {
        title: 'ID',
        key: 'id',
      },
      {
        title: 'Full Name',
        key: 'name',
        isSortable: true,
        isTitle: true,
      },
      {
        title: 'Email Address',
        key: 'email',
        isSortable: true,
        isTagline: true,
      },
      {
        title: 'Date created',
        key: 'date',
        formatter: value => (new Date(Number(value))).toDateString(),
        isMetadata: true,
      },
    ],
    items: sample_data,
    primaryKey: 'id',
    style: {},
  }

  const handleDataRequest = (pageNumber) => {
    console.log({ pageNumber });
  }

  const handleMenuAction = (action) => {
    console.log(action);

  }

  const handleItemClick = (item) => {
    console.log(item);
  }
  return (
    <div>
      <RDTable
        config={config}
        onDataRequest={handleDataRequest}
        onMenuAction={handleMenuAction}
        onItemClick={handleItemClick}
      />
    </div>
  )
}
