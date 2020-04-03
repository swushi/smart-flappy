class NeuralNetwork {
  constructor(input, hidden, output) {
    this.inputNodes = input;
    this.hiddenNodes = hidden;
    this.outputNodes = output;
    this.model = this.createModel();
  }

  predict(input) {
    return tf.tidy(() => {
      const xs = tf.tensor2d([input]);
      const ys = this.model.predict(xs);
      const outputs = ys.dataSync();
      return outputs;
    });
  }

  createModel() {
    const model = tf.sequential();
    const hidden = tf.layers.dense({
      units: this.hiddenNodes,
      inputDim: this.inputNodes,
      activation: "sigmoid"
    });
    const output = tf.layers.dense({
      units: this.outputNodes,
      activation: "softmax"
    });

    model.add(hidden);
    model.add(output);

    return model;
  }
}
