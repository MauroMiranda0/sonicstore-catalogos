// client/src/components/OrderPanel.jsx
import React from 'react';
import useCartStore from '../stores/cartStore';
import { FaTimes, FaTrash, FaCreditCard } from 'react-icons/fa';
import './OrderPanel.css';
import logo from '../assets/logo.png';
import aplazoLogo from '../assets/aplazo-logo.svg';

function OrderPanel({ isOpen, onClose }) {
  const items = useCartStore((state) => state.items);
  const removeProduct = useCartStore((state) => state.removeProduct);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleSendOrder = () => {
    if (items.length === 0) return;

    const body = items
      .map((item, index) => {
        const parts = [];
        parts.push(`${index + 1}. ${item.name}`);
        if (item.brand || item.catalog) parts.push(`Marca: ${item.brand || item.catalog}`);
        if (item.sku) parts.push(`Código: ${item.sku}`);
        if (item.variant) parts.push(`Variante: ${item.variant}`);
        parts.push(`Cantidad: ${item.quantity}`);
        return parts.join(' | ');
      })
      .join('\n');

    const message = `Hola! Quisiera cotizar los siguientes productos:\n\n${body}\n\nGracias!`;

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
                      {(item.brand || item.catalog) && (
                        <span className="item-meta">Marca: {item.brand || item.catalog}</span>
                      )}
                      {item.sku && <span className="item-meta">Código: {item.sku}</span>}
                      {item.variant && <span className="item-meta">Variante: {item.variant}</span>}
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
                    <img src={aplazoLogo} alt="Aplazo" className="payment-logo" />
                    App
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
