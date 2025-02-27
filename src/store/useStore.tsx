import { create } from "zustand";

export const useUpdatePageNavigation = create<{
  page: string;
  setPage: (page: string) => void;
}>((set) => ({
  page: "",
  setPage: (page) => set((state) => ({ ...state, page })),
}));

interface PaymentMethod {
  method: string;
  image: string;
  deposit?: {
    wallet: string;
    minimumDeposit: number;
    depositRange?: Array<number>;
    maximumDeposit: number;
    isRecommended: boolean;
  };
  isActive: boolean;
}

export const usePaymentMethods = create<{
  methodName: string;
  methods: PaymentMethod[];

  setMethods: (methodName: string, methods: PaymentMethod[]) => void;
}>((set) => ({
  methodName: "",
  methods: [],

  setMethods: (methodName, methods) =>
    set((state) => ({ ...state, methodName, methods })),
}));
