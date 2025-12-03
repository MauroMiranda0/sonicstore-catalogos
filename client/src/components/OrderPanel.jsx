// client/src/components/OrderPanel.jsx
import React from 'react';
import useCartStore from '../stores/cartStore';
import { FaTimes, FaTrash, FaCreditCard, FaMobileAlt } from 'react-icons/fa';
import './OrderPanel.css';
import logo from '../assets/logo.png';

function OrderPanel({ isOpen, onClose }) {
  const items = useCartStore((state) => state.items);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleSendOrder = () => {
    if (items.length === 0) return;

    let message = 'Hola! Quisiera cotizar los siguientes productos:\n\n';
    items.forEach((item) => {
      message += `- *Producto:* ${item.name}\n`;
      if (item.catalog) {
        message += `  *Catálogo:* ${item.catalog}\n`;
      }
      message += `  *Cantidad:* ${item.quantity}\n\n`;
    });
    message += 'Gracias!';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/527712650312?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    clearCart();
  };

  return (
    <>
      <div className={`order-panel-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>

      <div className={`order-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <div className="panel-brand">
            <img src={logo} alt="SonicStore" className="panel-logo" />
            <div>
              <h3>Mi Pedido</h3>
              <p className="panel-subtitle">Ticket preliminar</p>
            </div>
          </div>
          <button onClick={onClose} className="panel-close-btn" aria-label="Cerrar panel">
            <FaTimes />
          </button>
        </div>

        <div className="panel-body">
          {items.length === 0 ? (
            <p className="empty-cart-message">Tu lista de pedido está vacía.</p>
          ) : (
            <div className="ticket">
              <div className="ticket-top">
                <span className="ticket-label">Resumen de compra</span>
              </div>
              <ul className="order-item-list">
                {items.map((item) => (
                  <li key={item.id} className="order-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      {item.catalog && <span className="item-catalog">Catálogo: {item.catalog}</span>}
                    </div>
                    <div className="item-actions">
                      <input
                        type="number"
                        className="item-quantity-input"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                        min="1"
                      />
                      <button
                        onClick={() => removeProduct(item.id)}
                        className="item-remove-btn"
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="ticket-bottom">
                <span className="ticket-note">Precios se confirman por WhatsApp</span>
              </div>
              <div className="payment-methods">
                <span className="payment-label">Pagos aceptados</span>
                <div className="payment-icons">
                  <span className="payment-pill">
                    <FaCreditCard /> Tarjeta crédito / débito
                  </span>
                  <span className="payment-pill">
                    <FaMobileAlt /> App Aplazo
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="panel-footer">
          <button
            onClick={handleSendOrder}
            className="send-order-btn"
            disabled={items.length === 0}
          >
            Enviar Pedido por WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderPanel;
