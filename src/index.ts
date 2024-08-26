

export interface SharedData {
  inputText: string;
  inputDate: Date
  inner: InnerSharedData;
}

export interface InnerSharedData {
  inputNumber: number;
  inputEmail: string;
}
