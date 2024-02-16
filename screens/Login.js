import React, { useState } from "react";
import { View, Text, Button, Center, FormControl, Input, Modal } from "native-base";

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: "20%"
        }}
      >
        Registro - Conectado a la base de datos
      </Text>
      <Button onPress={() => setShowModal(true)}>Iniciar Sesion</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Iniciar Sesion</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                setShowModal(false);
              }}>
                Cancel
              </Button>
              <Button onPress={() => {
                setShowModal(false);
              }}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default Login;
