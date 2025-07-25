// client/src/components/OrderPanel.jsx
import React from 'react';
import useCartStore from '../stores/cartStore';
import { FaTimes, FaTrash } from 'react-icons/fa';
import './OrderPanel.css';



function OrderPanel({ isOpen, onClose }) {
  // 1. Obtenemos el estado y las acciones que necesitamos del store
  const items = useCartStore(state => state.items);
const removeProduct = useCartStore(state => state.removeProduct);
const updateQuantity = useCartStore(state => state.updateQuantity);
const clearCart = useCartStore(state => state.clearCart);


  // 2. Función para generar y abrir el enlace de WhatsApp
  const handleSendOrder = () => {
    if (items.length === 0) return;

    // Formateamos el mensaje
    let message = '¡Hola! Quisiera cotizar los siguientes productos:\n\n';
    items.forEach(item => {
      message += `- *Producto:* ${item.name}\n`;
      message += `  *Cantidad:* ${item.quantity}\n\n`;
    });
    message += '¡Gracias!';

    // Codificamos el mensaje para que sea seguro en una URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/527712415122?text=${encodedMessage}`;
    
    // Abrimos WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
    
    // Opcional: Limpiar el carrito después de enviar
    clearCart();
  };


  return (
    <>
      {/* Overlay oscuro cuando el panel está abierto */}
      <div className={`order-panel-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      
      {/* El panel en sí */}
      <div className={`order-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <h3>Mi Pedido</h3>
          <button onClick={onClose} className="panel-close-btn"><FaTimes /></button>
        </div>

        <div className="panel-body">
          {items.length === 0 ? (
            <p className="empty-cart-message">Tu lista de pedido está vacía.</p>
          ) : (
            <ul className="order-item-list">
              {items.map(item => (
                <li key={item.id} className="order-item">
                  <div className="item-info">
                    <span className="item-name">{item.name}</span>
                  </div>
                  <div className="item-actions">
                    <input
                      type="number"
                      className="item-quantity-input"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                      min="1"
                    />
                    <button onClick={() => removeProduct(item.id)} className="item-remove-btn">
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
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