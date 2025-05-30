import {
  KeyboundForm
} from "./chunk-6HTZNHPT.mjs";
import {
  RouteDrawer,
  useRouteModal
} from "./chunk-4TC5YS65.mjs";
import {
  ConditionalTooltip
} from "./chunk-OC7BQLYI.mjs";
import {
  Form
} from "./chunk-OBQI23QM.mjs";
import {
  useCustomer,
  useUpdateCustomer
} from "./chunk-F6PXCY3N.mjs";
import "./chunk-FXYH54JP.mjs";
import "./chunk-774WSTCC.mjs";
import "./chunk-DEQUVHHE.mjs";
import "./chunk-RPUOO7AV.mjs";

// src/routes/customers/customer-edit/customer-edit.tsx
import { Heading } from "@medusajs/ui";
import { useTranslation as useTranslation2 } from "react-i18next";
import { useParams } from "react-router-dom";

// src/routes/customers/customer-edit/components/edit-customer-form/edit-customer-form.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, toast } from "@medusajs/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as zod from "zod";
import { jsx, jsxs } from "react/jsx-runtime";
var EditCustomerSchema = zod.object({
  email: zod.string().email(),
  first_name: zod.string().optional(),
  last_name: zod.string().optional(),
  company_name: zod.string().optional(),
  phone: zod.string().optional()
});
var EditCustomerForm = ({ customer }) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();
  const form = useForm({
    defaultValues: {
      email: customer.email || "",
      first_name: customer.first_name || "",
      last_name: customer.last_name || "",
      company_name: customer.company_name || "",
      phone: customer.phone || ""
    },
    resolver: zodResolver(EditCustomerSchema)
  });
  const { mutateAsync, isPending } = useUpdateCustomer(customer.id);
  const handleSubmit = form.handleSubmit(async (data) => {
    await mutateAsync(
      {
        email: customer.has_account ? void 0 : data.email,
        first_name: data.first_name || null,
        last_name: data.last_name || null,
        phone: data.phone || null,
        company_name: data.company_name || null
      },
      {
        onSuccess: ({ customer: customer2 }) => {
          toast.success(
            t("customers.edit.successToast", {
              email: customer2.email
            })
          );
          handleSuccess();
        },
        onError: (error) => {
          toast.error(error.message);
        }
      }
    );
  });
  return /* @__PURE__ */ jsx(RouteDrawer.Form, { form, children: /* @__PURE__ */ jsxs(KeyboundForm, { onSubmit: handleSubmit, className: "flex flex-1 flex-col", children: [
    /* @__PURE__ */ jsx(RouteDrawer.Body, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-y-4", children: [
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "email",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.email") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(
                ConditionalTooltip,
                {
                  showTooltip: customer.has_account,
                  content: t("customers.edit.emailDisabledTooltip"),
                  children: /* @__PURE__ */ jsx(Input, { ...field, disabled: customer.has_account })
                }
              ) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "first_name",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.firstName") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "last_name",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.lastName") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "company_name",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.company") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      ),
      /* @__PURE__ */ jsx(
        Form.Field,
        {
          control: form.control,
          name: "phone",
          render: ({ field }) => {
            return /* @__PURE__ */ jsxs(Form.Item, { children: [
              /* @__PURE__ */ jsx(Form.Label, { children: t("fields.phone") }),
              /* @__PURE__ */ jsx(Form.Control, { children: /* @__PURE__ */ jsx(Input, { ...field }) }),
              /* @__PURE__ */ jsx(Form.ErrorMessage, {})
            ] });
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(RouteDrawer.Footer, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-x-2", children: [
      /* @__PURE__ */ jsx(RouteDrawer.Close, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "secondary", size: "small", children: t("actions.cancel") }) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          isLoading: isPending,
          type: "submit",
          variant: "primary",
          size: "small",
          children: t("actions.save")
        }
      )
    ] }) })
  ] }) });
};

// src/routes/customers/customer-edit/customer-edit.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CustomerEdit = () => {
  const { t } = useTranslation2();
  const { id } = useParams();
  const { customer, isLoading, isError, error } = useCustomer(id);
  if (isError) {
    throw error;
  }
  return /* @__PURE__ */ jsxs2(RouteDrawer, { children: [
    /* @__PURE__ */ jsx2(RouteDrawer.Header, { children: /* @__PURE__ */ jsx2(Heading, { children: t("customers.edit.header") }) }),
    !isLoading && customer && /* @__PURE__ */ jsx2(EditCustomerForm, { customer })
  ] });
};
export {
  CustomerEdit as Component
};
