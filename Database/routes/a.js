activedStep = 0;

model = {};
steps: StepType[] = [
  {
    label: 'step 1',
    fields: [
      {
        key: 'how are you',
        type: 'radio',
        
        templateOptions: {
            type: 'radio',
          label: 'how are you',
            options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }],
          required: true,
        },
        
      },
    
    ],
  },
  {
    label: 'step 2',
    fields: [
      {
        key: '',
        type: 'input',
        templateOptions: {
          label: 'Country',
          required: true,
        },
      },
    ],
  },
  {
    label: 'step 3',
    fields: [
      {
        key: 'day',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'Day of the trip',
          required: true,
        },
      },
    ],
  },
  {
    label: 'step 4',
    fields: [
      {
        key: 'day',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'Day of the trip',
          required: true,
        },
      },
    ]
  },
   {
    label: 'step 4',
    fields: [
      {
        key: 'day',
        type: 'input',
        templateOptions: {
          type: 'date',
          label: 'Day of the trip',
          required: true,
        },
      },
    ]
  },

];