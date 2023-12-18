# I-ON Communications Technical Test

<hr/>

## How to start project

1. Clone project and cd to the project's directory
2. Install all dependencies:

```bash
yarn
```

3. Start json-server:

```bash
yarn server
```

<strong>Make sure the file db.json is in form of:</strong>

```json
{
  "widgets": {}
}
```

4. Start React app in another terminal:

```bash
yarn dev
```

## Screenshots
Drag a widget on the left sidebar and drop it in the panel, then click on a widget to make it active:
![image](https://github.com/peterburgs/react-dnd/assets/48356852/327ceb54-f589-408f-bac7-f0bf17f2aeca)

Admin can edit the content of the button and the paragraph:
![image](https://github.com/peterburgs/react-dnd/assets/48356852/4aea1520-170c-4fff-9d0f-e5e714c617c7)

Admin can save data by clicking on the button `Save`:
![image](https://github.com/peterburgs/react-dnd/assets/48356852/960f047a-8122-4d21-843c-ce48e55cecd2)


The consumer can only view the data:
![image](https://github.com/peterburgs/react-dnd/assets/48356852/f0e2811c-793d-4e74-8896-c81f5f95764c)


The consumer clicks on the button and see the button alert message:
![image](https://github.com/peterburgs/react-dnd/assets/48356852/068bf52c-2654-43f1-bf82-ec06120494d2)




